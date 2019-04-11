//untuk meginstall service worker
self.addEventListener('install',	function(event)	{
		console.log('Service	worker	installing...');
		//	TODO	3.4:	Skip	waiting
		self.skipWaiting();
});

//	I'm	a	new	service	worker


//untuk mengaktifkan service worker
self.addEventListener('activate',	function(event)	{
		console.log('Service	worker	activating...');
});

//untuk menambahkan script untuk jika sudah terjadi fetch 
self.addEventListener('fetch',	function(event)	{
		console.log('Fetching:',	event.request.url);
});