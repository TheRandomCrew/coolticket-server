module.exports = {
  createUser: ({ userType, name, email, password }) => `
    INSERT INTO users (id_usertype, name, email, password)
    VALUES ('${userType}', '${name}', '${email}', '${password}')
  `,
  deleteUser: ({ idUser }) => `
    DELETE FROM users
    WHERE id = '${idUser}'
  `,
  // TODO: Get info from tickets?
  getUser: ({ idUser }) => `
    SELECT *
    FROM users
    WHERE id = ${idUser}
  `,
  updateUser: ({ idUser, userType, name, email, password }) => `
    UPDATE tickets
    SET
      ${userType ? `id_usertype = '${userType}',` : ''}
      ${name ? `name = '${name}',` : ''}
      ${email ? `id_usertype = '${email}',` : ''}
      ${password ? `password = '${password}',` : ''}
      updated_at = TIMESTAMP WITH TIME ZONE DEFAULT NOW()
    WHERE id = '${idUser}'
  `
}
