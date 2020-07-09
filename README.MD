Logowanie store'a z bigpicture - musimy wkleić taką linijkę przy inicjalizacji store'a.
	window.top.myStore = store;
Nalezy wczesniej (przed definicja klasy zrobic declare const window:any; )
