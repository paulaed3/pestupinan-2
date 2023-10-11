import useFetch from '../../../utils/hooks/useFetch';

function FetchTres() {
  let {data} = useFetch("https://jsonplaceholder.typicode.com/comments" , []);
  console.log(data);

  return (
    <div>
      Fetch 3
    </div>
  );
}

export default FetchTres;