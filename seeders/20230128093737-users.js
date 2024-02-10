'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          email: 'anoopm725@gmail.con',
          first_name: 'ANUP',
          last_name: 'MISHRA',
          country_code: 91,
          phone_number: 8219858723,
          password: '$2b$10$UACN38IPgRK/Bk1xvBbBtehN7uzrOBFbvIK/2iIKefm8JJ8R6DNx.',
          role: 'admin',
          address: "vatva",
          pincode: 263783,
          city: "Ahmedabad",
          state: "GUJRAT",
          country_name: "INDIA",
          active_status: 1,
         
        },
        {
          email: 'nharshavardhann@gmail.com',
          first_name: 'Harsha',
          last_name: 'user',
          country_code: 91,
          phone_number: 7200084746,
          password: '$2b$10$UACN38IPgRK/Bk1xvBbBtehN7uzrOBFbvIK/2iIKefm8JJ8R6DNx.',
          role: 'user',
          address: null,
          pincode: null,
          city: null,
          state: null,
          country_name: 'India',
          active_status: 1,

        },
        {
          email: 'n.harshavardhan47@gmail.com',
          first_name: 'Harsha',
          last_name: 'user',
          country_code: 91,
          phone_number: 7428888888,
          password: '$2b$10$UACN38IPgRK/Bk1xvBbBtehN7uzrOBFbvIK/2iIKefm8JJ8R6DNx.',
          role: 'user',
          address: null,
          pincode: null,
          city: null,
          state: null,
          country_name: 'India',
          active_status: 1,

         
        },
        {
          email: 'shainshayusuf@gmail.com',
          first_name: 'Shainsha',
          last_name: 'user',
          country_code: 91,
          phone_number: 8939463981,
          password: '$2b$10$UACN38IPgRK/Bk1xvBbBtehN7uzrOBFbvIK/2iIKefm8JJ8R6DNx.',
          role: 'user',
          address: null,
          pincode: null,
          city: null,
          state: null,
          country_name: 'India',
          active_status: 1,

       
        },
        {
          email: 'senthilece01@gmail.com',
          first_name: 'Senthil',
          last_name: 'user',
          country_code: 91,
          phone_number: 8220969708,
          password: '$2b$10$UACN38IPgRK/Bk1xvBbBtehN7uzrOBFbvIK/2iIKefm8JJ8R6DNx.',
          role: 'user',
          address: null,
          pincode: null,
          city: null,
          state: null,
          country_name: 'India',
          active_status: 1,

       
        },
        {
          email: 'venkat.raaonline@gmail.com',
          first_name: 'Venkatesh',
          last_name: 'user',
          country_code: 91,
          phone_number: 9994994266,
          password: '$2b$10$UACN38IPgRK/Bk1xvBbBtehN7uzrOBFbvIK/2iIKefm8JJ8R6DNx.',
          role: 'user',
          address: 't1 elite empire',
          pincode: 600034,
          city: 'chennai',
          state: 'tamilnadu',
          country_name: null,
          active_status: 1,

         
        },
        {
          email: 'shyam.raaonline@gmail.com',
          first_name: 'shyam',
          last_name: 'user',
          country_code: 91,
          phone_number: 9884748671,
          password: '$2b$10$UACN38IPgRK/Bk1xvBbBtehN7uzrOBFbvIK/2iIKefm8JJ8R6DNx.',
          role: 'user',
          address: null,
          pincode: null,
          city: null,
          state: null,
          country_name: 'India',
          active_status: 1,

       
        },
        {
          email: 'gaja@gmail.com',
          first_name: 'Gaja',
          last_name: 'user',
          country_code: 91,
          phone_number: 8760048656,
          password: '$2b$10$UACN38IPgRK/Bk1xvBbBtehN7uzrOBFbvIK/2iIKefm8JJ8R6DNx.',
          role: 'user',
          address: null,
          pincode: null,
          city: null,
          state: null,
          country_name: 'India',
          active_status: 1,

         
        },
        {
          email: 'fgj@hjk.com',
          first_name: 'ghijopg',
          last_name: 'user',
          country_code: 91,
          phone_number: 9865328668,
          password: '$2b$10$UACN38IPgRK/Bk1xvBbBtehN7uzrOBFbvIK/2iIKefm8JJ8R6DNx.',
          role: 'user',
          address: null,
          pincode: null,
          city: null,
          state: null,
          country_name: 'India',
          active_status: 1,

         
        },
        {
          email: 'krishnaravichander94@gmail.com',
          first_name: 'krishna',
          last_name: 'user',
          country_code: 91,
          phone_number: 9940123281,
          password: '$2b$10$UACN38IPgRK/Bk1xvBbBtehN7uzrOBFbvIK/2iIKefm8JJ8R6DNx.',
          role: 'user',
          address: null,
          pincode: null,
          city: null,
          state: null,
          country_name: 'India',
          active_status: 1,

        },
        {
          email: 'elavarasunaveen@outlook.com',
          first_name: 'Elavarasu',
          last_name: 'user',
          country_code: 91,
          phone_number: 9597529838,
          password: '$2b$10$UACN38IPgRK/Bk1xvBbBtehN7uzrOBFbvIK/2iIKefm8JJ8R6DNx.',
          role: 'user',
          address: null,
          pincode: null,
          city: null,
          state: null,
          country_name: 'India',
          active_status: 1,

         
        },
        {
          email: 'vaneeofficialnet@gmail.com',
          first_name: 'Vanee',
          last_name: 'user',
          country_code: 91,
          phone_number: 9894092824,
          password: '$2b$10$UACN38IPgRK/Bk1xvBbBtehN7uzrOBFbvIK/2iIKefm8JJ8R6DNx.',
          role: 'user',
          address: 'Gopalakrishnan Street, Off  Vandikaran Road',
          pincode: 600032,
          city: 'Chennai',
          state: 'Tamilnadu',
          country_name: 'India',
          active_status: 1,

      
        },
        {
          email: 'shiva.boxer1997@gmail.com',
          first_name: 'Shiva',
          last_name: 'C',
          country_code: 91,
          phone_number: 8508844185,
          password: '$2b$10$UACN38IPgRK/Bk1xvBbBtehN7uzrOBFbvIK/2iIKefm8JJ8R6DNx.',
          role: 'user',
          address: 'Chennai',
          pincode: 600028,
          city: 'Chennai',
          state: 'Tamilnadu',
          country_name: 'India',
          active_status: 1,

        },
      
   
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
