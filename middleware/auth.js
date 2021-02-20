import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) return res.json({ msg: 'token does not exist' });

    let decodedData;
    decodedData = jwt.decode(token);
    req.userId = decodedData?.sub;

    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;
