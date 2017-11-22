export default function(url, successCallback, errorCallback) {
	fetch(url)
		.then(function(response) {
			if (response.status === 200) {
				return response;
			} else {
				throw new Error(response.statusText);
			}
		})
		.then(response => {
			successCallback(response);
		})
		.catch(error => {
			errorCallback(error);
		});
}