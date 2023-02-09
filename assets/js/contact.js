/**	CONTACT FORM
*************************************************** 
**/

const URL = 'http://99.79.77.144:3000/api/contact'


const form = document.getElementById('contact-form')
form.addEventListener('submit', () => {
	const data = Object.fromEntries(new FormData(form));
	console.log(data)
	postData(data)
})

const postData = async (body) => {
	try {
		const res = await fetch(URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
		})
		console.log(res.status);
		const json = await res.json()
		console.log(json)
	} catch (err) {
		console.error(err)
	}
}