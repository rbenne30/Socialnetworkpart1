const { User } = require("../models");

try {
    const dbsocialnewtwork = await User.findAll({
      include: 
        
          attributes ['username']
        });
      
    

    const user = dbsocialnewtwork.map((user) =>
      user.get({ plain: true })


   