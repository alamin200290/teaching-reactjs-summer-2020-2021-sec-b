
export default function Button(title, callback, id){
	return `<input type='button' class='btn' onclick="${callback(id)}" name='button' value='${title}'>`;
	//return `<input type='button' class='btn' onclick='${()=>callback(id)}' name='button' value='${title}'>`;
}