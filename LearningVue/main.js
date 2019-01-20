new Vue({
    el: "#app",
    data: {
        greeting: "Hello VueJS",
        user: "Alex Botzis",
        city: "Prague",
        counter: 0,
    },
    methods: {
        changeGreeting() {
            this.greeting = this.greeting === "Hello VueJS"
                ? "What's up?"
                : 'Hello VueJS';
        },
    }
});