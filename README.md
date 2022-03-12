<h1 align="center">
  <img alt="Logo" src="./public/images/logo.svg" alt="ig.News">
</h1>

<h1 align="center">
    ig.News - Next.js
</h1>
<p align="center">Newsletter app 😜</p>


## About

The project aims to study and develop an application in ReactJS with NextJS for listing posts and subscription system.

The application was developed using the NextJS framework, applying concepts such as:
- external API consumption
- Root API
- Server Side Rendering (SSR)
- Static Site Generation (SSG)
- STRIPE for subscription payments
- NextAuth for authentication with Github
- FaunaDB to store the information in a database
- Prismic CMS for adding and managing post content.

The project was developed as a practice of the classes of [Rocketseat certification](https://rocketseat.com.br/)

---

## Techs

what i used in this project

- [ReactJS](https://reactjs.org/)
- [NextJS](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [SASS](https://sass-lang.com/)
- [Next-Auth](https://next-auth.js.org/)
- [Stripe](https://stripe.com/)
- [FaunaDB](https://fauna.com/)
- [Prismic CMS](https://prismic.io/)

---

## Configuration

### **Required**

Need to know/install:

- [Git](https://git-scm.com/)
- [Yarn](https://classic.yarnpkg.com)
- [Stripe CLI](https://stripe.com/docs/stripe-cli) (for dev)

Account for external services:

- [Stripe](https://stripe.com/)
- [FaunaDB](https://fauna.com/)
- [Prismic CMS](https://prismic.io/)

## Services settings

### Stripe

After creating your establishment, create the "subscription" product with at least name and value.

---

### FaunaDB

After creating the DataBase it will be necessary to create the Collections and Indexes

### **Collections**

```js
  {
    name: "subscriptions",
    history_days: 30,
    ttl_days: null
  }
  {
    name: "users",
    history_days: 30,
    ttl_days: null
  }
```

### **Indexes**

```js
  {
    name: "subscription_by_id",
    unique: false,
    serialized: true,
    source: "subscriptions",
    terms: [
      {
        field: ["data", "id"]
      }
    ]
  }
  {
    name: "subscription_by_status",
    unique: false,
    serialized: true,
    source: "subscriptions",
    terms: [
      {
        field: ["data", "status"]
      }
    ]
  }
  {
    name: "subscription_by_user_ref",
    unique: false,
    serialized: true,
    source: "subscriptions",
    terms: [
      {
        field: ["data", "userId"]
      }
    ]
  }
  {
    name: "user_by_email",
    unique: true,
    serialized: true,
    source: "users",
    terms: [
      {
        field: ["data", "email"]
      }
    ]
  }
  {
    name: "user_by_stripe_customer_id",
    unique: false,
    serialized: true,
    source: "users",
    terms: [
      {
        field: ["data", "stripe_customer_id"]
      }
    ]
  }
```

---

### Prismic CMS

After creating your repository, go to the "Custom Types" tab, add a new one with the following settings

Type: Repeatable Type

Name: post

Fields:
 - UID
 - Title as H1
 - RichText allowing multiple paragraphs and blank for links

On "Documents" tab, you can add posts.

### **Clone this project**

```bash
# Execute this comand
$ git clone https://github.com/pehcst/ignews.git
# after clone
$ cd ignews
```

### **Init the project**

```bash
# Execute yarn to install dependences
$ yarn
# On root, create a .env.local file with the comands bellow
# Execute stripe listen to get all responses
$ stripe listen --forward-to localhost:{port}/api/webhooks
$ yarn dev
```

### STRIPE
```
STRIPE_API_KEY= Secret key on dev docs
NEXT_PUBLIC_STRIPE_PUBLIC_KEY= Publishable key
STRIPE_WEBHOOK_SECRET= run stripe listen to get this code
STRIPE_SUCCESS_URL= http://localhost:{port}/{post_route}
STRIPE_CANCEL_URL= http://localhost:{port}/
```

### GITHUB
```
GITHUB_CLIENT_ID= go to github Settings>Developer settings>OAuth Apps>New OAuth App
GITHUB_CLIENT_SECRET= go to Settings>Developer settings>OAuth Apps>New OAuth App
```

### FAUNADB
```
FAUNADB_KEY= go to Security>Keys (need to create a key)
```

### PRISMIC CMS
```
PRISMIC_ENDPOINT= go to Settings>API & Security>API Endpoint
PRISMIC_ACCESS_TOKEN= go to Settings>API & Security>Generate an Access Token>Permanent access tokens
```


---

## Licence

MIT.

---

## Author

Build by Pedro Costa ✋🏻

[![Linkedin Badge](https://img.shields.io/badge/-Me-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/pehcst/)](https://www.linkedin.com/in/pehcst/)
