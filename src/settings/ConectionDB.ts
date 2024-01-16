import { createPool } from "mysql2/promise";


  const Conec= createPool({
    database: 'trabook',
    user: 'udux51x7o2335ryd7skr',
    host: 'aws.connect.psdb.cloud',
    password: 'pscale_pw_H2HquuPMLaISwG8dkthT0ttXEeyXa96RiCYLQvvsq0E',
    ssl:{
      rejectUnauthorized: true
    }
  })

export default Conec;
