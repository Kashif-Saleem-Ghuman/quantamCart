export const register = async (req, res) => {
  console.log(req.body);
  res.json({
    register: "You hit register API endpoint from controllers/auth.js",
  });
};
