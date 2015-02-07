Promise.reject(new Error('BOMB!!!!')).catch(function (error) {
	console.error(error);
});
