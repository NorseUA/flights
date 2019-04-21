const getData = (obj, path) => {
	if (path in obj) {
		return obj[path];
	}

	if (path.includes('.')) {
		const deepPath = path.split('.');

		return deepPath.reduce((acc, key) => {
			if ((acc instanceof Object)) {
				if (key in acc) {
					acc = acc[key];
				} else {
					acc = null;
				}
			}
			return acc;
		}, obj);
	}
};

export default getData;
