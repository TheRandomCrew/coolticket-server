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
  getUser: ({ key, value }) => `
    SELECT *
    FROM users
    WHERE ${key} = '${value}'
  `,
  isUser: ({ key, value }) => `
    SELECT EXISTS(SELECT 1 FROM users WHERE ${key} = '${value}')
  `,
  updateUser: ({ idUser, userType, name, email, password }) => `
    UPDATE tickets
    SET
      ${userType ? `id_usertype = '${userType}',` : ''}
      ${name ? `name = '${name}',` : ''}
      ${email ? `email = '${email}',` : ''}
      ${password ? `password = '${password}',` : ''}
      updated_at = TIMESTAMP WITH TIME ZONE DEFAULT NOW()
    WHERE id = '${idUser}'
  `
}
