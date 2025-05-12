const aboutme = {
    image: "https://images2.imgbox.com/56/88/oJvFN3l5_o.jpeg",
    text: "Welcome to my personal web page. You can find my own projects on this page. You can use the contact form to contact me about the projects."
};

const projects = [
    {
        id:1,
        heading: "integromat",
        image: "https://images.unsplash.com/photo-1642132652860-603f4e3c19b7?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "Integromat lets you connect apps and automate workflows in a few clicks.",
        link: "https://github.com/integromat"
    },
    {
        id:2,
        heading: "webflow",
        image: "https://images.unsplash.com/photo-1634084462412-b54873c0a56d?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "Webflow empowers designers o build professional, custom websites in completely.",
        link: "https://github.com/webflow"
    },
    {
        id:3,
        heading: "razorpay",
        image: "https://images.unsplash.com/photo-1642132652860-471b4228023e?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text: "Accept payments from customers. Automate payouts to vendors & employees.",
        link: "https://github.com/razorpay"
    }
];

const users = [
    {
        id: 1,
        username: "john",
        password: "1234",
        type: "admin",
        image: "https://images2.imgbox.com/56/88/oJvFN3l5_o.jpeg"
    },
    {
        id: 2,
        username: "özgür",
        password: "0000",
        type: "user",
        image: "https://images2.imgbox.com/8b/1c/vwWNTsCd_o.jpeg"
    },
    {
        id: 3,
        username: "mehmet",
        password: "4444",
        type: "user",
        image: ""
    }
];

export const loadTempDataset = () => {
    localStorage.setItem("aboutme", JSON.stringify(aboutme));
    localStorage.setItem("projects", JSON.stringify(projects));
    localStorage.setItem("users", JSON.stringify(users));
}
