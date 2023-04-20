const Joke = require('../models/jokes.model');

module.exports.findAllJokes = (request, response) => {
  Joke.find()
    .then((allJokes) => {
      response.json({ jokes: allJokes });
    })
    .catch((err) => {
      response.json({ message: 'Something went wrong', error: err });
    });
};

module.exports.findSingleJoke = (request, response) => {
  Joke.findOne({ _id: request.params.id })
    .then((singleJoke) => {
      response.json({ singleJoke: singleJoke });
    })
    .catch((err) => {
      response.json({ message: 'Something went wrong', error: err });
    });
};

module.exports.createJoke = (request, response) => {
  Joke.create(request.body)
    .then((newJoke) => {
      response.json({ newJoke: newJoke });
    })
    .catch((err) => {
      response.json({ message: 'Something went wrong', error: err });
    });
};

module.exports.updateJoke = (request, response) => {
  Joke.findOneAndUpdate({ _id: request.params.id }, request.body, {
    new: true,
    runValidators: true,
  })
    .then((updateJoke) => {
      response.json({ joke: updateJoke });
    })
    .catch((err) => {
      response.json({ message: 'Something went wrong', error: err });
    });
};

module.exports.deleteJoke = (request, response) => {
  Joke.deleteOne({ _id: request.params.id })
    .then((result) => {
      response.json({ result: result });
    })
    .catch((err) => {
      response.json({ message: 'Something went wrong', error: err });
    });
};
