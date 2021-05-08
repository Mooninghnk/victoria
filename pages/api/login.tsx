import { NextApiRequest, NextApiResponse } from "next";
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const user = await prisma.user.findUnique({
    where: {
      email: req.body.email,
    
    }
  });
  try {const email = req.body.email;
  const passwd = req.body.pass;
  if(user.email === email && user.pass === passwd) {
    res.send({id: 1, user: user})
  }else {res.send({id: 2})}
} catch(err) {
  res.send({err: 500})
}
};
