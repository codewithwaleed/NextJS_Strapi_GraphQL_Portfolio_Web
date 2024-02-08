import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

const PORTFOLIO = gql`
  query GetPortfolio($id: ID!) {
    portfolio (id: $id) {
      data {
        id
        attributes {
          title
          description
          slug
          date
          image {
            data {
              attributes {
                name
                alternativeText
                height
                width
                url
              }
            }
          }
          category {
            data {
              attributes {
                name
              }
            }
          }
          tags {
            data {
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`;
const Portfolio = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(PORTFOLIO, {
    variables: { id: id },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error, Please try again.</div>;

  const porfolio = data?.portfolio?.data;
  return (
    <div>
      <h1>{porfolio?.attributes?.title}</h1>
      <p>Date: {porfolio?.attributes?.date}</p>
      <h3>Category: <span>{porfolio?.attributes?.category?.data?.attributes?.name}</span></h3>
      <p>Tags: 
        {
          porfolio?.attributes?.tags?.data.map(tag => {
            return(
              <span>#{tag?.attributes?.name} </span>
            )
          })
        }
      </p>
      <img
        src={`http://localhost:1337${porfolio?.attributes?.image?.data?.attributes?.url}`}
      />
      <p>{porfolio?.attributes?.description}</p>
    </div>
  );
};

export default Portfolio;
