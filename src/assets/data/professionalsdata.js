const professionalsData = [
    {
        "id": 1,
        "image": "https://snibbs.co/cdn/shop/articles/What_are_the_Challenges_of_Being_a_Doctor_1001x665.jpg?v=1684314843",
        "name": "Dr. Alice",
        "description": "Dr. Alice is a renowned cardiologist with 15 years of experience in heart care.",
        "qualification": "M.D.",
        "profession": "Doctor",
        "rating": 4.8,
        "reviews": 210,
        "isPopular": "true",
        "isAvailable": "true"
    },
    {
        "id": 2,
        "image": "https://snibbs.co/cdn/shop/articles/What_are_the_Challenges_of_Being_a_Doctor_1001x665.jpg?v=1684314843",
        "name": "Dr. Bob",
        "description": "Dr. Bob is a skilled neurologist who specializes in brain disorders.",
        "qualification": "M.D.",
        "profession": "Doctor",
        "rating": 4.7,
        "reviews": 180,
        "isPopular": "true",
        "isAvailable": "false"
    },
    {
        "id": 3,
        "image": "https://snibbs.co/cdn/shop/articles/What_are_the_Challenges_of_Being_a_Doctor_1001x665.jpg?v=1684314843",
        "name": "Dr. Carol",
        "description": "Dr. Carol has expertise in pediatric medicine and has been practicing for 12 years.",
        "qualification": "M.D.",
        "profession": "Doctor",
        "rating": 4.6,
        "reviews": 150,
        "isPopular": "false",
        "isAvailable": "true"
    },
    {
        "id": 4,
        "image": "https://snibbs.co/cdn/shop/articles/What_are_the_Challenges_of_Being_a_Doctor_1001x665.jpg?v=1684314843",
        "name": "Dr. David",
        "description": "Dr. David is an experienced orthopedist specializing in joint surgeries.",
        "qualification": "M.D.",
        "profession": "Doctor",
        "rating": 4.5,
        "reviews": 190,
        "isPopular": "true",
        "isAvailable": "true"
    },
    {
        "id": 5,
        "image": "https://snibbs.co/cdn/shop/articles/What_are_the_Challenges_of_Being_a_Doctor_1001x665.jpg?v=1684314843",
        "name": "Dr. Eve",
        "description": "Dr. Eve is a general practitioner with a focus on preventive care.",
        "qualification": "M.D.",
        "profession": "Doctor",
        "rating": 4.4,
        "reviews": 160,
        "isPopular": "false",
        "isAvailable": "true"
    },
    {
        "id": 6,
        "image": "https://snibbs.co/cdn/shop/articles/What_are_the_Challenges_of_Being_a_Doctor_1001x665.jpg?v=1684314843",
        "name": "Dr. Frank",
        "description": "Dr. Frank specializes in internal medicine and has a reputation for thorough diagnoses.",
        "qualification": "M.D.",
        "profession": "Doctor",
        "rating": 4.9,
        "reviews": 220,
        "isPopular": "true",
        "isAvailable": "false"
    },
    {
        "id": 7,
        "image": "https://snibbs.co/cdn/shop/articles/What_are_the_Challenges_of_Being_a_Doctor_1001x665.jpg?v=1684314843",
        "name": "Dr. Grace",
        "description": "Dr. Grace is a well-known oncologist with extensive experience in cancer treatment.",
        "qualification": "M.D.",
        "profession": "Doctor",
        "rating": 4.7,
        "reviews": 200,
        "isPopular": "true",
        "isAvailable": "true"
    },
    {
        "id": 8,
        "image": "https://snibbs.co/cdn/shop/articles/What_are_the_Challenges_of_Being_a_Doctor_1001x665.jpg?v=1684314843",
        "name": "Dr. Henry",
        "description": "Dr. Henry is a veteran urologist with advanced skills in managing urinary tract issues.",
        "qualification": "M.D.",
        "profession": "Doctor",
        "rating": 4.6,
        "reviews": 170,
        "isPopular": "false",
        "isAvailable": "true"
    },
    {
        "id": 9,
        "image": "https://snibbs.co/cdn/shop/articles/What_are_the_Challenges_of_Being_a_Doctor_1001x665.jpg?v=1684314843",
        "name": "Dr. Ivy",
        "description": "Dr. Ivy specializes in rheumatology and has been practicing for over a decade.",
        "qualification": "M.D.",
        "profession": "Doctor",
        "rating": 4.5,
        "reviews": 140,
        "isPopular": "false",
        "isAvailable": "false"
    },
    {
        "id": 10,
        "image": "https://snibbs.co/cdn/shop/articles/What_are_the_Challenges_of_Being_a_Doctor_1001x665.jpg?v=1684314843",
        "name": "Dr. Jack",
        "description": "Dr. Jack is an expert in emergency medicine and has a strong background in trauma care.",
        "qualification": "M.D.",
        "profession": "Doctor",
        "rating": 4.8,
        "reviews": 230,
        "isPopular": "true",
        "isAvailable": "true"
    },
    {
        "id": 11,
        "image": "https://images.squarespace-cdn.com/content/v1/6126609e1e667e2536065b3e/1630437846189-FBRI7TTQ6F26CYVQP701/210812_Joseph_1408-Edit.jpg",
        "name": "Dr. Karen",
        "description": "Dr. Karen is a top-rated dentist known for her gentle approach and advanced techniques.",
        "qualification": "D.D.S.",
        "profession": "Dentist",
        "rating": 4.9,
        "reviews": 210,
        "isPopular": "true",
        "isAvailable": "true"
    },
    {
        "id": 12,
        "image": "https://images.squarespace-cdn.com/content/v1/6126609e1e667e2536065b3e/1630437846189-FBRI7TTQ6F26CYVQP701/210812_Joseph_1408-Edit.jpg",
        "name": "Dr. Liam",
        "description": "Dr. Liam specializes in cosmetic dentistry and has been practicing for 8 years.",
        "qualification": "D.D.S.",
        "profession": "Dentist",
        "rating": 4.8,
        "reviews": 190,
        "isPopular": "true",
        "isAvailable": "true"
    },
    {
        "id": 13,
        "image": "https://images.squarespace-cdn.com/content/v1/6126609e1e667e2536065b3e/1630437846189-FBRI7TTQ6F26CYVQP701/210812_Joseph_1408-Edit.jpg",
        "name": "Dr. Mia",
        "description": "Dr. Mia offers comprehensive dental care with a focus on orthodontics.",
        "qualification": "D.M.D.",
        "profession": "Dentist",
        "rating": 4.7,
        "reviews": 160,
        "isPopular": "false",
        "isAvailable": "true"
    },
    {
        "id": 14,
        "image": "https://images.squarespace-cdn.com/content/v1/6126609e1e667e2536065b3e/1630437846189-FBRI7TTQ6F26CYVQP701/210812_Joseph_1408-Edit.jpg",
        "name": "Dr. Noah",
        "description": "Dr. Noah is a highly skilled endodontist specializing in root canal treatments.",
        "qualification": "D.D.S.",
        "profession": "Dentist",
        "rating": 4.6,
        "reviews": 140,
        "isPopular": "false",
        "isAvailable": "true"
    },
    {
        "id": 15,
        "image": "https://images.squarespace-cdn.com/content/v1/6126609e1e667e2536065b3e/1630437846189-FBRI7TTQ6F26CYVQP701/210812_Joseph_1408-Edit.jpg",
        "name": "Dr. Olivia",
        "description": "Dr. Olivia provides excellent pediatric dental care and has a great rapport with kids.",
        "qualification": "D.D.S.",
        "profession": "Dentist",
        "rating": 4.5,
        "reviews": 180,
        "isPopular": "true",
        "isAvailable": "false"
    },
    {
        "id": 16,
        "image": "https://images.squarespace-cdn.com/content/v1/6126609e1e667e2536065b3e/1630437846189-FBRI7TTQ6F26CYVQP701/210812_Joseph_1408-Edit.jpg",
        "name": "Dr. Peter",
        "description": "Dr. Peter is known for his expertise in periodontics and gum disease treatment.",
        "qualification": "D.M.D.",
        "profession": "Dentist",
        "rating": 4.4,
        "reviews": 150,
        "isPopular": "true",
        "isAvailable": "true"
    },
    {
        "id": 17,
        "image": "https://images.squarespace-cdn.com/content/v1/6126609e1e667e2536065b3e/1630437846189-FBRI7TTQ6F26CYVQP701/210812_Joseph_1408-Edit.jpg",
        "name": "Dr. Quinn",
        "description": "Dr. Quinn offers top-notch dental implants and restorative services.",
        "qualification": "D.D.S.",
        "profession": "Dentist",
        "rating": 4.8,
        "reviews": 200,
        "isPopular": "true",
        "isAvailable": "false"
    },
    {
        "id": 18,
        "image": "https://images.squarespace-cdn.com/content/v1/6126609e1e667e2536065b3e/1630437846189-FBRI7TTQ6F26CYVQP701/210812_Joseph_1408-Edit.jpg",
        "name": "Dr. Ryan",
        "description": "Dr. Ryan has extensive experience in general dentistry and oral surgery.",
        "qualification": "D.D.S.",
        "profession": "Dentist",
        "rating": 4.7,
        "reviews": 170,
        "isPopular": "false",
        "isAvailable": "true"
    },
    {
        "id": 19,
        "image": "https://images.squarespace-cdn.com/content/v1/6126609e1e667e2536065b3e/1630437846189-FBRI7TTQ6F26CYVQP701/210812_Joseph_1408-Edit.jpg",
        "name": "Dr. Sophia",
        "description": "Dr. Sophia is known for her expertise in orthodontics and smile design.",
        "qualification": "D.M.D.",
        "profession": "Dentist",
        "rating": 4.6,
        "reviews": 190,
        "isPopular": "false",
        "isAvailable": "true"
    },
    {
        "id": 20,
        "image": "https://images.squarespace-cdn.com/content/v1/6126609e1e667e2536065b3e/1630437846189-FBRI7TTQ6F26CYVQP701/210812_Joseph_1408-Edit.jpg",
        "name": "Dr. Tom",
        "description": "Dr. Tom provides a full range of dental services with a focus on preventative care.",
        "qualification": "D.D.S.",
        "profession": "Dentist",
        "rating": 4.5,
        "reviews": 160,
        "isPopular": "true",
        "isAvailable": "true"
    },
    {
        "id": 21,
        "image": "https://t3.ftcdn.net/jpg/05/06/74/32/360_F_506743235_coW6QAlhxlBWjnRk0VNsHqaXGGH9F4JS.jpg",
        "name": "Sophie",
        "description": "Sophie is a creative hairdresser specializing in trendy cuts and color treatments.",
        "qualification": "Certified Hairdresser",
        "profession": "Hairdresser",
        "rating": 4.9,
        "reviews": 220,
        "isPopular": "true",
        "isAvailable": "true"
    },
    {
        "id": 22,
        "image": "https://t3.ftcdn.net/jpg/05/06/74/32/360_F_506743235_coW6QAlhxlBWjnRk0VNsHqaXGGH9F4JS.jpg",
        "name": "Emma",
        "description": "Emma is known for her expertise in styling and bridal hair design.",
        "qualification": "Certified Hairdresser",
        "profession": "Hairdresser",
        "rating": 4.8,
        "reviews": 200,
        "isPopular": "true",
        "isAvailable": "false"
    },
    {
        "id": 23,
        "image": "https://t3.ftcdn.net/jpg/05/06/74/32/360_F_506743235_coW6QAlhxlBWjnRk0VNsHqaXGGH9F4JS.jpg",
        "name": "Liam",
        "description": "Liam provides exceptional haircuts and color services with a focus on client satisfaction.",
        "qualification": "Certified Hairdresser",
        "profession": "Hairdresser",
        "rating": 4.7,
        "reviews": 180,
        "isPopular": "false",
        "isAvailable": "true"
    },
    {
        "id": 24,
        "image": "https://t3.ftcdn.net/jpg/05/06/74/32/360_F_506743235_coW6QAlhxlBWjnRk0VNsHqaXGGH9F4JS.jpg",
        "name": "Ava",
        "description": "Ava specializes in avant-garde styles and creative hair coloring.",
        "qualification": "Certified Hairdresser",
        "profession": "Hairdresser",
        "rating": 4.6,
        "reviews": 170,
        "isPopular": "false",
        "isAvailable": "true"
    },
    {
        "id": 25,
        "image": "https://t3.ftcdn.net/jpg/05/06/74/32/360_F_506743235_coW6QAlhxlBWjnRk0VNsHqaXGGH9F4JS.jpg",
        "name": "Oliver",
        "description": "Oliver is known for his precision haircuts and personalized hair care advice.",
        "qualification": "Certified Hairdresser",
        "profession": "Hairdresser",
        "rating": 4.5,
        "reviews": 160,
        "isPopular": "true",
        "isAvailable": "true"
    },
    {
        "id": 26,
        "image": "https://t3.ftcdn.net/jpg/05/06/74/32/360_F_506743235_coW6QAlhxlBWjnRk0VNsHqaXGGH9F4JS.jpg",
        "name": "Isabella",
        "description": "Isabella offers high-quality hair styling with a focus on the latest trends.",
        "qualification": "Certified Hairdresser",
        "profession": "Hairdresser",
        "rating": 4.7,
        "reviews": 190,
        "isPopular": "true",
        "isAvailable": "false"
    },
    {
        "id": 27,
        "image": "https://t3.ftcdn.net/jpg/05/06/74/32/360_F_506743235_coW6QAlhxlBWjnRk0VNsHqaXGGH9F4JS.jpg",
        "name": "James",
        "description": "James is an expert in classic cuts and modern styling techniques.",
        "qualification": "Certified Hairdresser",
        "profession": "Hairdresser",
        "rating": 4.6,
        "reviews": 180,
        "isPopular": "false",
        "isAvailable": "true"
    },
    {
        "id": 28,
        "image": "https://t3.ftcdn.net/jpg/05/06/74/32/360_F_506743235_coW6QAlhxlBWjnRk0VNsHqaXGGH9F4JS.jpg",
        "name": "Mia",
        "description": "Mia is known for her exceptional color work and detailed haircuts.",
        "qualification": "Certified Hairdresser",
        "profession": "Hairdresser",
        "rating": 4.8,
        "reviews": 210,
        "isPopular": "true",
        "isAvailable": "true"
    },
    {
        "id": 29,
        "image": "https://t3.ftcdn.net/jpg/05/06/74/32/360_F_506743235_coW6QAlhxlBWjnRk0VNsHqaXGGH9F4JS.jpg",
        "name": "Noah",
        "description": "Noah provides stylish haircuts and grooming services with a focus on customer comfort.",
        "qualification": "Certified Hairdresser",
        "profession": "Hairdresser",
        "rating": 4.5,
        "reviews": 150,
        "isPopular": "false",
        "isAvailable": "true"
    },
    {
        "id": 30,
        "image": "https://t3.ftcdn.net/jpg/05/06/74/32/360_F_506743235_coW6QAlhxlBWjnRk0VNsHqaXGGH9F4JS.jpg",
        "name": "Lily",
        "description": "Lily offers a range of hairdressing services with a personalized approach.",
        "qualification": "Certified Hairdresser",
        "profession": "Hairdresser",
        "rating": 4.7,
        "reviews": 200,
        "isPopular": "true",
        "isAvailable": "false"
    },
    {
        "id": 31,
        "image": "https://nationalpti.org/wp-content/uploads/2014/02/Personal-Trainer.jpg",
        "name": "Alex",
        "description": "Alex is a certified personal trainer with expertise in strength training and nutrition.",
        "qualification": "Certified Personal Trainer",
        "profession": "Trainer",
        "rating": 4.9,
        "reviews": 230,
        "isPopular": "true",
        "isAvailable": "true"
    },
    {
        "id": 32,
        "image": "https://nationalpti.org/wp-content/uploads/2014/02/Personal-Trainer.jpg",
        "name": "Bella",
        "description": "Bella specializes in high-intensity interval training (HIIT) and endurance workouts.",
        "qualification": "Certified Personal Trainer",
        "profession": "Trainer",
        "rating": 4.8,
        "reviews": 210,
        "isPopular": "true",
        "isAvailable": "true"
    },
    {
        "id": 33,
        "image": "https://nationalpti.org/wp-content/uploads/2014/02/Personal-Trainer.jpg",
        "name": "Chris",
        "description": "Chris offers personalized training programs with a focus on functional fitness.",
        "qualification": "Certified Personal Trainer",
        "profession": "Trainer",
        "rating": 4.7,
        "reviews": 180,
        "isPopular": "false",
        "isAvailable": "true"
    },
    {
        "id": 34,
        "image": "https://nationalpti.org/wp-content/uploads/2014/02/Personal-Trainer.jpg",
        "name": "Diana",
        "description": "Diana is an expert in yoga and pilates, providing balanced fitness routines.",
        "qualification": "Certified Personal Trainer",
        "profession": "Trainer",
        "rating": 4.6,
        "reviews": 170,
        "isPopular": "false",
        "isAvailable": "true"
    },
    {
        "id": 35,
        "image": "https://nationalpti.org/wp-content/uploads/2014/02/Personal-Trainer.jpg",
        "name": "Ethan",
        "description": "Ethan offers training programs focused on muscle building and weight loss.",
        "qualification": "Certified Personal Trainer",
        "profession": "Trainer",
        "rating": 4.5,
        "reviews": 160,
        "isPopular": "true",
        "isAvailable": "false"
    },
    {
        "id": 36,
        "image": "https://nationalpti.org/wp-content/uploads/2014/02/Personal-Trainer.jpg",
        "name": "Fiona",
        "description": "Fiona specializes in outdoor fitness training and adventure workouts.",
        "qualification": "Certified Personal Trainer",
        "profession": "Trainer",
        "rating": 4.7,
        "reviews": 200,
        "isPopular": "true",
        "isAvailable": "true"
    },
    {
        "id": 37,
        "image": "https://nationalpti.org/wp-content/uploads/2014/02/Personal-Trainer.jpg",
        "name": "George",
        "description": "George provides expert guidance in strength and conditioning for athletes.",
        "qualification": "Certified Personal Trainer",
        "profession": "Trainer",
        "rating": 4.6,
        "reviews": 190,
        "isPopular": "false",
        "isAvailable": "true"
    },
    {
        "id": 38,
        "image": "https://nationalpti.org/wp-content/uploads/2014/02/Personal-Trainer.jpg",
        "name": "Hannah",
        "description": "Hannah focuses on holistic fitness approaches and lifestyle coaching.",
        "qualification": "Certified Personal Trainer",
        "profession": "Trainer",
        "rating": 4.8,
        "reviews": 210,
        "isPopular": "true",
        "isAvailable": "true"
    },
    {
        "id": 39,
        "image": "https://nationalpti.org/wp-content/uploads/2014/02/Personal-Trainer.jpg",
        "name": "Ian",
        "description": "Ian offers specialized training for rehabilitation and injury recovery.",
        "qualification": "Certified Personal Trainer",
        "profession": "Trainer",
        "rating": 4.5,
        "reviews": 150,
        "isPopular": "false",
        "isAvailable": "true"
    },
    {
        "id": 40,
        "image": "https://nationalpti.org/wp-content/uploads/2014/02/Personal-Trainer.jpg",
        "name": "Julia",
        "description": "Julia is known for her expertise in martial arts and self-defense training.",
        "qualification": "Certified Personal Trainer",
        "profession": "Trainer",
        "rating": 4.7,
        "reviews": 200,
        "isPopular": "true",
        "isAvailable": "false"
    }
];


export default professionalsData;