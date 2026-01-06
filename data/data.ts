export interface User {
  id: string;
  name: string;
  avatar: string;
  caretaker: string;
  source: string;
}

export interface Post {
  id: string;
  image: string;
  title: string;
  description: string;
  caretaker: string;
  source: string;
  friend: boolean;
}

export interface Featured {
  id: string;
  image: string;
  title: string;
  description: string;
  caretaker: string;
  source: string;
}

export interface Data {
  users: User[];
  posts: Post[];
  featured: Featured[];
}

const data = {
  users: [
    {
      id: "user-1",
      name: "Gipsy",
      avatar:
        "https://static-assets.codecademy.com/Courses/learn-react-native-v53/02-styling/lab/users/gipsy-pfp.jpeg",
      caretaker: "Manja Vitolic",
      source: "https://static-assets.codecademy.com/Courses/learn-react-native-v53/02-styling/lab/users/gipsy-pfp.jpeg",
    },
    {
      id: "user-2",
      name: "Miao",
      avatar:
        "https://static-assets.codecademy.com/Courses/learn-react-native-v53/02-styling/lab/users/miao-pfp.jpeg",
      caretaker: "Alvan Nee",
      source: "https://static-assets.codecademy.com/Courses/learn-react-native-v53/02-styling/lab/users/miao-pfp.jpeg",
    },
    {
      id: "user-3",
      name: "Nala",
      avatar:
        "https://static-assets.codecademy.com/Courses/learn-react-native-v53/02-styling/lab/users/nala-pfp.jpeg",
      caretaker: "Hang Niu",
      source: "https://static-assets.codecademy.com/Courses/learn-react-native-v53/02-styling/lab/users/nala-pfp.jpeg",
    },
    {
      id: "user-4",
      name: "Fluffy",
      avatar:
        "https://static-assets.codecademy.com/Courses/learn-react-native-v53/02-styling/lab/users/fluffy-pfp.jpeg",
      caretaker: "Nick Fewings",
      source: "https://static-assets.codecademy.com/Courses/learn-react-native-v53/02-styling/lab/users/fluffy-pfp.jpeg",
    },
    {
      id: "user-5",
      name: "Mewo",
      avatar:
        "https://static-assets.codecademy.com/Courses/learn-react-native-v53/02-styling/lab/users/mewo-pfp.jpeg",
      caretaker: "Jamel Hopkins",
      source: "https://static-assets.codecademy.com/Courses/learn-react-native-v53/02-styling/lab/users/mewo-pfp.jpeg",
    },
  ],
  posts: [
    {
      id: "post-1",
      image:
        "https://static-assets.codecademy.com/Courses/learn-react-native-v53/02-styling/lab/posts/post-1.jpeg",
      title: "Fuzzy Kitten",
      description:
        "Curious kitten",
      caretaker: "Daniel Park",
      source: "https://static-assets.codecademy.com/Courses/learn-react-native-v53/02-styling/lab/posts/post-1.jpeg",
      friend: true,
    },
    {
      id: "post-2",
      image:
        "https://static-assets.codecademy.com/Courses/learn-react-native-v53/02-styling/lab/posts/post-2.jpeg",
      title: "On the scratching post",
      description: "Anya getting active.",
      caretaker: "Willian Justen de Vasconcellos",
      source: "https://static-assets.codecademy.com/Courses/learn-react-native-v53/02-styling/lab/posts/post-2.jpeg",
      friend: false,
    },
    {
      id: "post-3",
      image:
        "https://static-assets.codecademy.com/Courses/learn-react-native-v53/02-styling/lab/posts/post-3.jpeg",
      title: "Sharply Dressed",
      description:
        "Spiffy!",
      caretaker: "River Kao",
      source: "https://static-assets.codecademy.com/Courses/learn-react-native-v53/02-styling/lab/posts/post-3.jpeg",
      friend: false,
    },
    {
      id: "post-4",
      image:
        "https://static-assets.codecademy.com/Courses/learn-react-native-v53/02-styling/lab/posts/post-4.jpeg",
      title: "Lavish Cat",
      description:
        "Admire the jawline on this striped specimen!",
      caretaker: "Paul Hanaoka",
      source: "https://static-assets.codecademy.com/Courses/learn-react-native-v53/02-styling/lab/posts/post-4.jpeg",
      friend: false,
    },
    {
      id: "post-5",
      image:
        "https://static-assets.codecademy.com/Courses/learn-react-native-v53/02-styling/lab/posts/post-5.jpeg",
      title: "Cat from Chengdu",
      description:
        "No fence can hold em back!",
      caretaker: "Chunli Ju",
      source: "https://static-assets.codecademy.com/Courses/learn-react-native-v53/02-styling/lab/posts/post-5.jpeg",
      friend: true,
    },
    {
      id: "post-6",
      image:
        "https://static-assets.codecademy.com/Courses/learn-react-native-v53/02-styling/lab/posts/post-6.jpeg",
      title: "Small pats",
      description:
        "small pat for a small cat!",
      caretaker: "Jamie Street",
      source: "https://static-assets.codecademy.com/Courses/learn-react-native-v53/02-styling/lab/posts/post-6.jpeg",
      friend: false,
    },
  ],
  featured: [
    {
      id: "feat-1",
      image:
        "https://static-assets.codecademy.com/Courses/learn-react-native-v53/02-styling/lab/posts/feat-1.jpeg",
      title: "Dynamic Duo",
      description:
        "Double the trouble!",
      caretaker: "Jamel Hopkins",
      source: "https://static-assets.codecademy.com/Courses/learn-react-native-v53/02-styling/lab/posts/feat-1.jpeg",
    },
  ],
};

export default data;
