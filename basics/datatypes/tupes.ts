
    // role is tuple here
    const person: {
        name: string;
        age: number;
        hobbies: string[];
        role: [number, string];
      } = {
        name: 'Maximilian',
        age: 30,
        hobbies: ['Sports', 'Cooking'],
        role: [2, 'author']
      };
      
      // push is exception - allowed on tuple
      person.role.push('admin');
      
      // 10 can not be assigned it should be string as per rule
      // person.role[1] = 10;
      
      // This is also not allowed with tuple
      // person.role = [0, 'admin', 'user'];
      
      let favoriteActivities: string[];
      favoriteActivities = ['Sports'];
      
      console.log(person.name);
      
      for (const hobby of person.hobbies) {
        console.log(hobby.toUpperCase());
        // console.log(hobby.map()); // !!! ERROR !!!
      }
      