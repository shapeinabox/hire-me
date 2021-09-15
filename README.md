# Instructions

clone the repository and run the following commands:
yarn install
yarn start

# What did I do?

Since the focus of the challenge wasn't the design, I decide to use MaterialUI components to achieve a good UI out of the box.

To store the children I decided to use redux, even though it's overkill for a small like these, I wanted it to feel like a real-world and bigger application.
I also used the store for managing a couple of UI states.

To handle asynchronous actions (effects), I decided to use redux-observable instead of thunk. I actually find it more clean and powerful (but of course I don't mind working with thunk).

For the check-in/out actions, since we are loading a lot of data all at once, initially I didn't want to trigger a refresh of the whole list, since it's a lot of data. So after doing the POST request I wanted to update manually in store only the single child.
Unfortunately typescript was giving me some bad errors about the updateChild action, I could resolve them, but I'm out of time for the challenge, so I just trigger a reload of the all children after the check-in/out request for now.

# Interested in working for Famly?

Give us a chance to see your beautiful code! 🤩

How to get started:

- Fork this repository
- Create a small application in React (or another agreed upon framework)
- Describe your design decisions and setup instructions in the README.md of the forked repository

The application should be able to do 3 things:

1. List children with some form of pagination/lazy-loading/infinite-scroll
2. Checkin a child
3. Checkout a child

There are no other requirements than that—don't worry about design or anything like that.

If you have any questions feel free to reach out to ckl@famly.co (Christian) or ab@famly.co (Adam) ☺️

## API Specification

Use this access token: `234ffdb8-0889-4be3-b096-97ab1679752c`

### Fetch some children from

The API does not support any limit or offset, so the pagination/lazy-loading/infinite-scroll will have to be done client-side only.

```
GET https://tryfamly.co/api/daycare/tablet/group
Arguments: {
	accessToken: <accessToken>,
	groupId: '11fc220c-ebba-4e55-9346-cd1eed714620',
	institutionId: 'fb6c8114-387e-4051-8cf7-4e388a77b673'
}
```

Example in cURL:

```bash
$ curl "https://tryfamly.co/api/daycare/tablet/group?accessToken=234ffdb8-0889-4be3-b096-97ab1679752c&groupId=11fc220c-ebba-4e55-9346-cd1eed714620&institutionId=fb6c8114-387e-4051-8cf7-4e388a77b673"
```

### Checkin child

```
POST https://tryfamly.co/api/v2/children/<childId>/checkins

Arguments: {
	accessToken: <accessToken>
	pickupTime: 16:00
}
```

Example in cURL:

```bash
$ curl \
  -d 'accessToken=234ffdb8-0889-4be3-b096-97ab1679752c&pickupTime=16:00' \
  https://tryfamly.co/api/v2/children/fcd683d0-bc31-468c-948f-1ca70b91439d/checkins
```

### Checkout child

```
POST https://tryfamly.co/api/v2/children/<childId>/checkout
Arguments: {
	accessToken: <accessToken>
}
```

Example in cURL:

```bash
$ curl \
  -d 'accessToken=234ffdb8-0889-4be3-b096-97ab1679752c' \
  https://tryfamly.co/api/v2/children/fcd683d0-bc31-468c-948f-1ca70b91439d/checkout
```
