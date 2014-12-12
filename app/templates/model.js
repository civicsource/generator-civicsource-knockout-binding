define(["knockout"],
  function (ko) {
    function ViewModel(){

    }

    function getObservable(obj) {
		if (ko.isObservable(obj)) {
			return obj;
		} else {
			if (obj) {
				return ko.observable(obj);
			} else {
				return ko.observable();
			}
		}
	}

    return ViewModel;
  });
