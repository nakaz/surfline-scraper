# Surfline Scraper

A brute-forced set of javascript to scrape Surfline's webpages for `spot_id`
data of their buoy's and build an SQL query to store into a table for indexing.

The spot data is used for querying Surfline's API and provide an
interface to search a spot or location.

### Order of use:

Notes for running scripts in order to pull data down.

##### `index.js`

The scraper itself. Builds a single json file for each spot scraped.

##### `surpoints-combine.js`

Combines all json files built in the `surfpoints` directory into a
`surfpoints.json` file.

##### `surfpoints-map.js`

Takes the `surfpoints.json` and restructures into a array of structured objects.

Outputs a `surfpoints-complete.json` file.

Example schema:

```json
  {
    "region": "Mid Atlantic",
    "continent": "North America",
    "locality": "New Jersey",
    "location": "10th Street North to 14th Street North",
    "spot_id": 5172
  }
```

##### `surfpoints-sql.js`

Using `pg-promise` inserts all surfpoints into a
PostgreSQL database.

[OPTIONAL] Outputs a `surfpoints-insert.sql` file.
