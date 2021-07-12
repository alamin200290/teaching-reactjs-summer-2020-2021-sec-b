
export default function Button(title, callback){
	return `<input type='button' onclick="${callback()}" name='button' value='${title}'>`;
}