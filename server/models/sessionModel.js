const db = require("../config/db");

const createSession = async (course_id, otp_code, expires_at, created_by) => {
  const [result] = await db.query(
    "INSERT INTO sessions (course_id, otp_code, expires_at, created_at, created_by) VALUES (?, ?, ?, ?)",
    [course_id, otp_code, expires_at, created_by],
  );

  return result;
};

module.exports = {
  createSession,
};
