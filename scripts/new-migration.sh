fileName="$(date +%Y%m%d%H%M%S)_$1.ts"

cat <<EOF >src/migrations/$fileName
import * as Knex from 'knex';

exports.up = (knex: Knex) => {
};

exports.down = (knex: Knex) => {
};
EOF
