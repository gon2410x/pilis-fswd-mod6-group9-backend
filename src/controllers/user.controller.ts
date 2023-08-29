import { Request, Response } from "express";
import { User } from "../entity/User";


import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Rol } from "../entity/Rol";
const jwtSecret = 'somesecrettoken';
const jwtRefreshTokenSecret = 'somesecrettokenrefresh';
let refreshTokens: (string | undefined)[] = [];


const createToken = (user: User) => {
  // Se crean el jwt y refresh token
  const token = jwt.sign({ id: user.id_user, email: user.email }, jwtSecret, {expiresIn: '300s'});
  const refreshToken = jwt.sign({ email: user.email }, jwtRefreshTokenSecret, {expiresIn: '90d'});
  
  refreshTokens.push(refreshToken);
  return {
      token,
      refreshToken
  }
}


export const getUsers = async (req: Request, res: Response) => {
  
    try {
      const users = await User.find({ relations: { rol:true } });
  
      return res.json(users);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  };

export const getUser = async (req: Request, res: Response) => {
  console.log("hola");
  try {
    const { id } = req.params;

    const user = await User.findOne({ 
      where: { id_user: parseInt(id) },
    });

    if (!user) return res.status(404).json({ message: "User not found" });
  
    return res.json(user);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};


  export const signUp = async (req: Request, res: Response ): Promise<Response> => {
    const {user, email, password} = req.body;

    if (!user ||  !email || !password) {
      return res
        .status(400)
        .json({ msg: "Please. Send your user, email and password" });
    }
  
    const user_ = await User.find({ where: [  {user}, {email}, ] });


    if ( user_.length !== 0 ) {
      return res.status(400).json({ msg: "The User o email already Exists" });
    }
  
  
    const newUser = new User();
    newUser.user = user;
    newUser.email = email;
    newUser.password = await createHash(password);

    const rol_user = new Rol();
    rol_user.id_rol = 2;
    newUser.rol = rol_user;

    console.log(newUser);

    await newUser.save();
    return res.status(201).json({ messaje: "the user was successfully registered"});
  };


  export const signIn = async (req: Request, res: Response): Promise<Response> => {
    const {email, password} = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ msg: "Please. Send your email and password" });
    }
  
    const user = await User.findOne({ relations: { rol : true}, where: { email }  });
    if (!user) {
      return res.status(400).json({ msg: "The email does not exists" });
    }

    console.log(user);
    console.log(user.rol);
  
    const isMatch = await comparePassword(user, password);
    if (isMatch) {
      return res.status(200).json({ credentials: createToken(user), rol: user.rol.rol });
    }
  
    return res.status(400).json({
      msg: "The password are incorrect"
    });
  };


  const comparePassword = async (user: User, password: string ): Promise<Boolean> => {
    return await bcrypt.compare(password, user.password);
  };



  const createHash = async (password: string ): Promise<string> => {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
  };


  