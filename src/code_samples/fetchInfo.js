import React, { Component } from 'react';

class FetchInfo extends Component {
	render() {
		return (<div style={{ textAlign: 'left' }}>
			<pre>
{`app.post('/compliance/fetch_info', function (request, response) {
	var addressParts = response.body.address.split('*');
	var friendlyId = addressParts[0];

	// You need to create \`accountDatabase.findByFriendlyId()\`. It should look
	// up a customer by their Stellar account and return account information.
	accountDatabase
		.findByFriendlyId(friendlyId)
		.then(function(account) {
			// This can be any data you determine is useful and is not limited to
			// these three fields.
			response.json({
				name: account.fullName,
				address: account.address,
				date_of_birth: account.dateOfBirth
			});
			response.end();
		})
		.catch(function(error) {
			console.error('Fetch Info Error:', error);
			response.status(500).end(error.message);
		});
});
`}
			</pre>
		</div>);
	}
}

export default FetchInfo;