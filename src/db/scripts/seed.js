import { connection } from "mongoose";
import connectDB from "../";
import {
  BankAccount,
  User,
  Establishment,
  Fee,
  Movement,
  Notice,
  Property,
  Report,
  Space,
  SpaceBooking,
  VisitNotice,
} from "@models";
import bcrypt from "bcryptjs";

const seed = async () => {
  await connectDB();

  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash("123", salt);

  const establishments = [
    new Establishment({
      name: "Toscana Residencial",
      location:
        "Prolongacion Ruiz Cortinez, Dominio Cumbres, 66036 Mitras Poniente, N.L.",
      type: "neighborhood",
    }),
    new Establishment({
      name: "Rincón de la Sierra",
      location: "Av Sierra Alta, Valle Alto, 64989 Monterrey, N.L.",
      type: "neighborhood",
    }),
  ];

  const users = [
    // Super admin
    new User({
      name: "Adrian",
      lastname: "Montemayor Rojas",
      email: "a.rojas@edifikka.com",
      password: hashedPassword,
      birthday: "2000-07-21",
      type: ["superadmin"],
    }),
    new User({
      name: "Roberto",
      lastname: "Montemayor Rojas",
      email: "r.rojas@edifikka.com",
      password: hashedPassword,
      birthday: "1997-12-30",
      type: ["superadmin"],
    }),
    // Admins
    new User({
      name: "Luis",
      lastname: "Sánchez Hernández",
      email: "l.sanchez@edifikka.com",
      password: hashedPassword,
      birthday: "1985-03-14",
      type: ["admin"],
    }),
    new User({
      name: "María",
      lastname: "Gómez Rivera",
      email: "m.gomez@edifikka.com",
      password: hashedPassword,
      birthday: "1980-11-23",
      type: ["admin"],
    }),
    // Condominos
    // Toscana Residencial
    // Usuarios con type: ["owner", "resident"]
    new User({
      name: "Carlos",
      lastname: "Méndez Torres",
      email: "c.mendez@gmail.com",
      password: hashedPassword,
      birthday: "1989-06-12",
      type: ["owner", "resident"],
      establishments: [establishments[0]._id],
    }),

    new User({
      name: "Ana",
      lastname: "López García",
      email: "a.lopez@gmail.com",
      password: hashedPassword,
      birthday: "1991-04-22",
      type: ["owner", "resident"],
      establishments: [establishments[0]._id],
    }),

    new User({
      name: "Raúl",
      lastname: "Hernández Díaz",
      email: "r.hernandez@gmail.com",
      password: hashedPassword,
      birthday: "1987-11-05",
      type: ["owner", "resident"],
      establishments: [establishments[0]._id],
    }),

    new User({
      name: "Claudia",
      lastname: "Martínez Flores",
      email: "c.martinez@gmail.com",
      password: hashedPassword,
      birthday: "1985-08-30",
      type: ["owner", "resident"],
      establishments: [establishments[0]._id],
    }),

    new User({
      name: "Fernando",
      lastname: "Gómez Ruiz",
      email: "f.gomez@gmail.com",
      password: hashedPassword,
      birthday: "1992-02-14",
      type: ["owner", "resident"],
      establishments: [establishments[0]._id],
    }),
    // Usuarios con type: ["owner"]
    new User({
      name: "Laura",
      lastname: "Ramírez Ortiz",
      email: "l.ramirez@gmail.com",
      password: hashedPassword,
      birthday: "1983-07-19",
      type: ["owner"],
      establishments: [establishments[0]._id],
    }),

    new User({
      name: "Miguel",
      lastname: "Pérez Sánchez",
      email: "m.perez@gmail.com",
      password: hashedPassword,
      birthday: "1984-03-25",
      type: ["owner"],
      establishments: [establishments[0]._id],
    }),

    new User({
      name: "Sofía",
      lastname: "Moreno Álvarez",
      email: "s.moreno@gmail.com",
      password: hashedPassword,
      birthday: "1988-10-11",
      type: ["owner"],
      establishments: [establishments[0]._id],
    }),

    new User({
      name: "Javier",
      lastname: "Ramos Jiménez",
      email: "j.ramos@gmail.com",
      password: hashedPassword,
      birthday: "1980-05-02",
      type: ["owner"],
      establishments: [establishments[0]._id],
    }),

    new User({
      name: "Paula",
      lastname: "Núñez Rojas",
      email: "p.nunez@gmail.com",
      password: hashedPassword,
      birthday: "1990-12-07",
      type: ["owner"],
      establishments: [establishments[0]._id],
    }),
    // Usuarios con type: ["resident"]
    new User({
      name: "Andrés",
      lastname: "García Castillo",
      email: "a.garcia@gmail.com",
      password: hashedPassword,
      birthday: "1993-09-27",
      type: ["resident"],
      establishments: [establishments[0]._id],
    }),

    new User({
      name: "Mónica",
      lastname: "Reyes Vázquez",
      email: "m.reyes@gmail.com",
      password: hashedPassword,
      birthday: "1986-01-15",
      type: ["resident"],
      establishments: [establishments[0]._id],
    }),

    new User({
      name: "José",
      lastname: "Torres Luna",
      email: "j.torres@gmail.com",
      password: hashedPassword,
      birthday: "1994-11-10",
      type: ["resident"],
      establishments: [establishments[0]._id],
    }),

    new User({
      name: "Verónica",
      lastname: "Cruz Ramos",
      email: "v.cruz@gmail.com",
      password: hashedPassword,
      birthday: "1981-04-16",
      type: ["resident"],
      establishments: [establishments[0]._id],
    }),

    new User({
      name: "David",
      lastname: "Ortiz Fuentes",
      email: "d.ortiz@gmail.com",
      password: hashedPassword,
      birthday: "1989-08-22",
      type: ["resident"],
      establishments: [establishments[0]._id],
    }),

    // Rincon de la sierra
    // Usuarios con type: ["owner", "resident"]
    new User({
      name: "Alejandro",
      lastname: "Vargas López",
      email: "a.vargas@gmail.com",
      password: hashedPassword,
      birthday: "1986-09-12",
      type: ["owner", "resident"],
      establishments: [establishments[1]._id],
    }),

    new User({
      name: "Gabriela",
      lastname: "Morales Ruiz",
      email: "g.morales@gmail.com",
      password: hashedPassword,
      birthday: "1988-02-24",
      type: ["owner", "resident"],
      establishments: [establishments[1]._id],
    }),

    new User({
      name: "Ricardo",
      lastname: "Pérez Ramírez",
      email: "r.perez@gmail.com",
      password: hashedPassword,
      birthday: "1983-11-07",
      type: ["owner", "resident"],
      establishments: [establishments[1]._id],
    }),

    new User({
      name: "Clara",
      lastname: "Mendoza Fernández",
      email: "c.mendoza@gmail.com",
      password: hashedPassword,
      birthday: "1990-03-16",
      type: ["owner", "resident"],
      establishments: [establishments[1]._id],
    }),

    new User({
      name: "Enrique",
      lastname: "Santos Torres",
      email: "e.santos@gmail.com",
      password: hashedPassword,
      birthday: "1984-06-19",
      type: ["owner", "resident"],
      establishments: [establishments[1]._id],
    }),

    // Usuarios con type: ["owner"]
    new User({
      name: "Lucía",
      lastname: "Gómez Martínez",
      email: "l.gomez@gmail.com",
      password: hashedPassword,
      birthday: "1987-05-25",
      type: ["owner"],
      establishments: [establishments[1]._id],
    }),

    new User({
      name: "Héctor",
      lastname: "Silva Morales",
      email: "h.silva@gmail.com",
      password: hashedPassword,
      birthday: "1985-01-30",
      type: ["owner"],
      establishments: [establishments[1]._id],
    }),

    new User({
      name: "Carmen",
      lastname: "Castro Jiménez",
      email: "c.castro@gmail.com",
      password: hashedPassword,
      birthday: "1991-09-10",
      type: ["owner"],
      establishments: [establishments[1]._id],
    }),

    new User({
      name: "Daniel",
      lastname: "Ortega Sánchez",
      email: "d.ortega@gmail.com",
      password: hashedPassword,
      birthday: "1982-04-22",
      type: ["owner"],
      establishments: [establishments[1]._id],
    }),

    new User({
      name: "Patricia",
      lastname: "Reyes Navarro",
      email: "p.reyes@gmail.com",
      password: hashedPassword,
      birthday: "1990-12-15",
      type: ["owner"],
      establishments: [establishments[1]._id],
    }),

    // Usuarios con type: ["resident"]
    new User({
      name: "Francisco",
      lastname: "Alvarez Domínguez",
      email: "f.alvarez@gmail.com",
      password: hashedPassword,
      birthday: "1989-07-28",
      type: ["resident"],
      establishments: [establishments[1]._id],
    }),

    new User({
      name: "Julia",
      lastname: "Cabrera López",
      email: "j.cabrera@gmail.com",
      password: hashedPassword,
      birthday: "1983-11-02",
      type: ["resident"],
      establishments: [establishments[1]._id],
    }),

    new User({
      name: "Roberto",
      lastname: "Hernández Velázquez",
      email: "rob.hernandez@gmail.com",
      password: hashedPassword,
      birthday: "1994-02-14",
      type: ["resident"],
      establishments: [establishments[1]._id],
    }),

    new User({
      name: "Elena",
      lastname: "Villanueva García",
      email: "e.villanueva@gmail.com",
      password: hashedPassword,
      birthday: "1986-06-03",
      type: ["resident"],
      establishments: [establishments[1]._id],
    }),

    new User({
      name: "Juan",
      lastname: "Molina Sánchez",
      email: "j.molina@gmail.com",
      password: hashedPassword,
      birthday: "1991-08-20",
      type: ["resident"],
      establishments: [establishments[1]._id],
    }),
  ];

  const properties = [
    // Toscana residencial
    new Property({
      street: "Calle Toscana 1",
      number: 104,
      users: [users[4]._id],
      owner: users[4]._id,
      responsible: users[4]._id,
      indiviso: 0.1,
      establishment: establishments[0]._id,
    }),
    new Property({
      street: "Calle Toscana 2",
      number: 142,
      users: [users[5]._id],
      owner: users[5]._id,
      responsible: users[5]._id,
      indiviso: 0.1,
      establishment: establishments[0]._id,
    }),

    new Property({
      street: "Calle Toscana 3",
      number: 157,
      users: [users[6]._id],
      owner: users[6]._id,
      responsible: users[6]._id,
      indiviso: 0.1,
      establishment: establishments[0]._id,
    }),

    new Property({
      street: "Calle Toscana 4",
      number: 183,
      users: [users[7]._id],
      owner: users[7]._id,
      responsible: users[7]._id,
      indiviso: 0.1,
      establishment: establishments[0]._id,
    }),

    new Property({
      street: "Calle Toscana 5",
      number: 176,
      users: [users[8]._id],
      owner: users[8]._id,
      responsible: users[8]._id,
      indiviso: 0.1,
      establishment: establishments[0]._id,
    }),

    new Property({
      street: "Calle Toscana 6",
      number: 201,
      users: [users[9]._id, users[14]._id],
      owner: users[9]._id,
      responsible: users[14]._id,
      indiviso: 0.1,
      establishment: establishments[0]._id,
    }),
    new Property({
      street: "Calle Toscana 7",
      number: 224,
      users: [users[10]._id, users[15]._id],
      owner: users[10]._id,
      responsible: users[15]._id,
      indiviso: 0.1,
      establishment: establishments[0]._id,
    }),

    new Property({
      street: "Calle Toscana 8",
      number: 278,
      users: [users[11]._id, users[16]._id],
      owner: users[11]._id,
      responsible: users[16]._id,
      indiviso: 0.1,
      establishment: establishments[0]._id,
    }),

    new Property({
      street: "Calle Toscana 9",
      number: 239,
      users: [users[12]._id, users[17]._id],
      owner: users[12]._id,
      responsible: users[17]._id,
      indiviso: 0.1,
      establishment: establishments[0]._id,
    }),

    new Property({
      street: "Calle Toscana 10",
      number: 254,
      users: [users[13]._id, users[18]._id],
      owner: users[13]._id,
      responsible: users[18]._id,
      indiviso: 0.1,
      establishment: establishments[0]._id,
    }),

    // Rincon de la Sierra
    new Property({
      street: "Sierra de las Aves",
      number: 109,
      users: [users[19]._id],
      owner: users[19]._id,
      responsible: users[19]._id,
      indiviso: 0.1,
      establishment: establishments[1]._id,
    }),
    new Property({
      street: "Sierra de los Leones",
      number: 143,
      users: [users[20]._id],
      owner: users[20]._id,
      responsible: users[20]._id,
      indiviso: 0.1,
      establishment: establishments[1]._id,
    }),

    new Property({
      street: "Sierra de las Águilas",
      number: 172,
      users: [users[21]._id],
      owner: users[21]._id,
      responsible: users[21]._id,
      indiviso: 0.1,
      establishment: establishments[1]._id,
    }),

    new Property({
      street: "Sierra de los Lobos",
      number: 188,
      users: [users[22]._id],
      owner: users[22]._id,
      responsible: users[22]._id,
      indiviso: 0.1,
      establishment: establishments[1]._id,
    }),

    new Property({
      street: "Sierra de las Serpientes",
      number: 119,
      users: [users[23]._id],
      owner: users[23]._id,
      responsible: users[23]._id,
      indiviso: 0.1,
      establishment: establishments[1]._id,
    }),

    new Property({
      street: "Sierra de los delfines",
      number: 254,
      users: [users[24]._id, users[29]._id],
      owner: users[24]._id,
      responsible: users[29]._id,
      indiviso: 0.1,
      establishment: establishments[1]._id,
    }),
    new Property({
      street: "Sierra de los Tigres",
      number: 267,
      users: [users[25]._id, users[30]._id],
      owner: users[25]._id,
      responsible: users[30]._id,
      indiviso: 0.1,
      establishment: establishments[1]._id,
    }),

    new Property({
      street: "Sierra de las Tortugas",
      number: 283,
      users: [users[26]._id, users[31]._id],
      owner: users[26]._id,
      responsible: users[31]._id,
      indiviso: 0.1,
      establishment: establishments[1]._id,
    }),

    new Property({
      street: "Sierra de los Osos",
      number: 219,
      users: [users[27]._id, users[32]._id],
      owner: users[27]._id,
      responsible: users[32]._id,
      indiviso: 0.1,
      establishment: establishments[1]._id,
    }),

    new Property({
      street: "Sierra de las Gaviotas",
      number: 245,
      users: [users[28]._id, users[33]._id],
      owner: users[28]._id,
      responsible: users[33]._id,
      indiviso: 0.1,
      establishment: establishments[1]._id,
    }),
  ];

  const savings = [
    ...establishments.map((establishment) => establishment.save()),
    ...users.map((user) => user.save()),
    ...properties.map((property) => property.save()),
  ];

  await Promise.all(savings);

  connection.close();
};

seed();
