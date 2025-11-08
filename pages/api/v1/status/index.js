import database from "infra/database.js";

async function status(request, response) {
  const databaseName = process.env.POSTGRES_DB;
  const currentISODate = new Date().toISOString();
  const versionQueryResult = await database.query("SHOW server_version;");
  const maxConnectionsQueryResult = await database.query(
    "SHOW max_connections;",
  );
  const openConnectionsQueryResult = await database.query({
    text: "SELECT count(*)::int FROM pg_stat_activity WHERE datname = $1;",
    values: [databaseName],
  });

  response.status(200).json({
    updated_at: currentISODate,
    dependencies: {
      database: {
        version: versionQueryResult.rows[0].server_version,
        max_connections: parseInt(
          maxConnectionsQueryResult.rows[0].max_connections,
        ),
        open_connections: openConnectionsQueryResult.rows[0].count,
      },
    },
  });
}

export default status;
