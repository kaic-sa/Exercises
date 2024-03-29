const express = require("express");

const app = express();

const { quotes } = require("./data");
const { getRandomElement } = require("./utils");

const PORT = process.env.PORT || 4001;

app.use(express.static("public"));
app.listen(PORT);

app.get("/api/quotes/random", (req, res, next) => {
  const newRandomQuote = getRandomElement(quotes);
  const newQuote = {
    quote: newRandomQuote,
  };
  res.send(newQuote);
});

app.get("/api/quotes", (req, res) => {
  if (req.query.person !== undefined) {
    const quotesByPerson = quotes.filter(
      (quote) => quote.person === req.query.person
    );
    res.send({
      quotes: quotesByPerson,
    });
  } else {
    res.send({
      quotes: quotes,
    });
  }
});
