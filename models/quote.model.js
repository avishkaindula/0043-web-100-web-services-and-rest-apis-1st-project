const db = require("../data/database");

class Quote {
  static async getRandomQuote() {
    const quotes = await db.getDb().collection("quotes").find().toArray();
    // This will give an array of quotes.
    const randomQuoteIndex = Math.floor(Math.random() * quotes.length);
    // Math.floor will round decimal numbers to integers.
    // Math.random() will give a random number between 0 and 0.999999
    // This will return a random index number which can be used to select a
    // quote randomly from the database.

    // [q1, q2, q3] => length: 3 => 0.8 * 3 => 2.4 => Math.floor(2.4) => 2
    // This will select the 3rd quote

    // [q1, q2, q3] => length: 3 => 0.1 * 3 => 0.3 => Math.floor(0.3) => 0
    // This will select hte 1st quote

    const randomQuote = quotes[randomQuoteIndex];

    return randomQuote.text;
  }
}

module.exports = Quote;
