import useFetch from '../../../utils/hooks/useFetch';

function FetchUno() {
  let {data} = useFetch("https://jsonplaceholder.typicode.com/users" , []);
  console.log(data);

  return (
    <div>
      Fetch 1
    </div>
  );
}

export default FetchUno;