This project was bootstrapped from:

<a href="https://github.com/mattcarlotta/nextjs-ssr-kit"><img src="https://camo.githubusercontent.com/68dd6e9df3222320cafb22080c2c4dae4c1eacd6/68747470733a2f2f692e696d6775722e636f6d2f626e656a3565732e706e67"></img></a>

## Installation

1 - Clone the repository.

```
git clone --single-branch --branch master git@github.com:mattcarlotta/test-bench.git
```

2 - Run `yarn install` to install dependencies.

3 - While at the application's root directory, start a dev server by running `yarn dev`.

<hr />

## Example API

Provided in this application is an integrated RESTFUL API (utilizing PostgreSQL).

If you wish to utilize the API:

- <a href="https://www.postgresql.org/download/">Install PostgreSQL</a> and make sure the service is up and running.
- Run `sudo -u postgres psql` to log in to a PostgreSQL shell as super user postgres.
- Run `psql` to log into PostgreSQL DB.
- Run `\password postgres` to set a password for "postgres"; after pressing enter, it'll prompt for the password.
- Run `\q` to exits PostgreSQL shell.
- Optionally run `sudo systemctl enable postgresql` to start PostgreSQL on reboots.
- From the root directory, run `cd /database && psql -U postgres -f initDB.sql` to initialize a development PostgreSQL table.
