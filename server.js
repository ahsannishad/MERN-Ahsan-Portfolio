const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const path = require("path");
const cors = require("cors");
const twilio = require("twilio");
//Defining App
const app = express();
app.use(cors());
//Body persing Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "50mb" }));

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

//Using session and passport
app.use(
	session({
		secret: process.env.PASSPORT_SECRET,
		resave: false,
		saveUninitialized: false,
	})
);

app.use(passport.initialize());
app.use(passport.session());

//mongoose connection
mongoose
	.connect(process.env.MONGODB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
	})
	.then((res) => {
		console.log("Database connected");
	})
	.catch((error) => {
		console.log(error);
	});

mongoose.set("useCreateIndex", true);

//...............................ALL Mongoose Schema Starts..................................//
//User Schema
const userSchema = new mongoose.Schema({
	email: {
		type: String,
	},
	password: {
		type: String,
	},
});

userSchema.plugin(passportLocalMongoose);
const User = new mongoose.model("User", userSchema);
passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app
	.route("/api/user")

	.post((req, res) => {
		if (req.isAuthenticated()) {
			User.register(
				{ username: req.body.username },
				req.body.password,
				(error, user) => {
					if (error) {
						res.status(500).send(error);
					} else {
						passport.authenticate("local")(req, res, () => {
							res.send(user.username);
						});
					}
				}
			);
		} else {
			res.status(409).send("You are not authorized");
		}
	})
	.get((req, res) => {
		User.find({ username: req.body.username }, function (error, user) {
			if (error) {
				res.status(404).send(error);
			} else {
				res.send(user);
			}
		});
	});

//check authentication
app.get("/api/user/authenticated", (req, res) => {
	if (req.isAuthenticated()) {
		res.send(true);
	} else {
		res.send(false);
	}
});

//Login Route
app.route("/api/user/login").post((req, res) => {
	const user = new User({
		username: req.body.username,
		password: req.body.password,
	});

	req.logIn(user, (error) => {
		if (error) {
			res.status(401).send(error);
		} else {
			passport.authenticate("local")(req, res, () => {
				User.find({ username: user.username }, function (error, user) {
					if (error) {
						res.send(false);
					} else {
						res.send(true);
					}
				});
			});
		}
	});
});

//logout
app.post("/api/user/logout", (req, res) => {
	req.logout();
	res.send("User logged out successfully");
});

//Project Schema
const projectSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		category: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		previewImages: {
			type: Array,
			required: true,
		},
		imagesRefer: {
			type: Array,
			required: true,
		},
		frameworks: {
			type: Array,
			required: true,
		},
		functionalities: {
			type: Array,
			required: true,
		},
		previewLink: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

const Projects = new mongoose.model("Projects", projectSchema);

//projects route
app
	.route("/api/projects")
	.get((req, res) => {
		Projects.find({}, (error, projects) => {
			if (error) {
				res.status(500).send("Something went wrong while getting projects");
			} else {
				res.send(projects);
			}
		});
	})
	.post((req, res) => {
		if (req.isAuthenticated()) {
			const projects = new Projects({
				title: req.body.title,
				category: req.body.category,
				description: req.body.description,
				previewImages: req.body.previewImages,
				imagesRefer: req.body.imagesRefer,
				frameworks: req.body.frameworks,
				functionalities: req.body.functionalities,
				previewLink: req.body.previewLink,
			});

			projects.save((error, success) => {
				if (error) {
					res.status(500).send(error);
				} else {
					res.send("Project Saved Successfully");
				}
			});
		} else {
			res.status(409).send("You are not authorized");
		}
	})
	.delete((req, res) => {
		if (req.isAuthenticated()) {
			Projects.deleteMany({}, (error, success) => {
				if (error) {
					res.status(500).send(error);
				} else {
					res.send("Successfully Deleted All Projects");
				}
			});
		} else {
			res.status(409).send("You are not authorized");
		}
	});

//Featured project

app.get("/api/featuredprojects", (req, res) => {
	Projects.find({})
		.sort({})
		.limit(3)
		.then((projects) => {
			res.send(projects);
		})
		.catch((error) => {
			res
				.status(500)
				.send("something went wrong while getting featured project");
		});
});

//individual project
app
	.route("/api/projects/:id")

	.get((req, res) => {
		Projects.find({ _id: req.params.id }, (error, project) => {
			if (error) {
				res.status(500).send("Something went wrong while getting the Project");
			} else {
				res.send(project);
			}
		});
	})

	.put((req, res) => {
		if (req.isAuthenticated()) {
			Projects.findByIdAndUpdate(
				{ _id: req.params.id },
				{
					title: req.body.title,
					category: req.body.category,
					description: req.body.description,
					previewImages: req.body.previewImages,
					imagesRefer: req.body.imagesRefer,
					frameworks: req.body.frameworks,
					functionalities: req.body.functionalities,
					previewLink: req.body.previewLink,
				},
				(error, success) => {
					if (error) {
						res
							.status(500)
							.send("something went wrong while updating the project");
					} else {
						res.send("Project Updated Successfully");
					}
				}
			);
		} else {
			res.status(409).send("You are not authorized");
		}
	})
	.delete((req, res) => {
		if (req.isAuthenticated()) {
			Projects.findByIdAndDelete({ _id: req.params.id }, (error, success) => {
				if (error) {
					res
						.status(500)
						.send("something went wrong while deleting the project");
				} else {
					res.send("Successfully Deleted The Project");
				}
			});
		} else {
			res.status(409);
		}
	});

//....................................Messages........................................//
const messagesSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		message: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

const Messages = new mongoose.model("Messages", messagesSchema);

app
	.route("/api/messages")

	.post((req, res) => {
		const message = new Messages({
			name: req.body.name,
			email: req.body.email,
			message: req.body.message,
		});

		message.save((error, success) => {
			if (error) {
				res.status(500).send("Internal server error while saving the message");
			} else {
				res.send("Message Sent!");
			}
		});
	})
	.get((req, res) => {
		Messages.find({})
			.then((messages) => {
				res.send(messages);
			})
			.catch((error) => {
				res.status(500).send("Something went wrong while getting Messages");
			});
	})
	.delete((req, res) => {
		if (req.isAuthenticated()) {
			Messages.deleteMany({}).then((deleted) => {
				res.send("Successfully deleted all messages");
			});
		} else {
			res.status(409);
		}
	});

//delete individual message
app.delete("/api/messages/:id", (req, res) => {
	if (req.isAuthenticated()) {
		Messages.findByIdAndDelete({ _id: req.params.id })
			.then((deleted) => {
				res.send("successfully deleted the message");
			})
			.catch((error) => {
				res.status(500).send("Something went wrong while deleting the project");
			});
	} else {
		res.status(409);
	}
});

//...................................Automatic SMS api................................//

app.post("/sendsms", (req, res) => {
	client.messages
		.create({
			body: `Hello ${req.body.name}, Thank you for subscribing to http://omerfahad.com/ You are now a Part of our team. Keep supporting us. For any query plese visit http://omerfahad.com/ `,
			from: "+1 708 998 5563",
			to: req.body.number,
		})
		.then((message) => res.send("SMS Send Successfully"))
		.catch((error) => {
			console.log(error);
		});
});

//...................................Automatic SMS api................................//

//..................................Production Setup.......................................//

// Production
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
	app.get("*", (req, res) => {
		res.sendFile(path.join(__dirname, "client", "build", "index.html"));
	});
}

const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log(`App started at port ${port}`);
});
