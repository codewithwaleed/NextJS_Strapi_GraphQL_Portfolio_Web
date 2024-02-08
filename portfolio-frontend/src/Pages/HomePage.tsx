// import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
const PORTFOLIOS = gql`
  query GetPortfolios {
    portfolios(sort: "title:desc")  {
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

const HomePage = () => {
  const { loading, error, data } = useQuery(PORTFOLIOS);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error, Please try again.</div>;
  const portfolios = data?.portfolios?.data;

  return (
    <>
      <h1>Home Page</h1>
      {portfolios &&
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        portfolios?.map((portfolio: any) => {
          return (
            <div className="list-item-container" key={portfolio?.id}>
              <h1>{portfolio?.attributes?.title}</h1>
              <p>
                {portfolio?.attributes?.description.substring(0, 200)}... 
                <Link to={`/portfolio/${portfolio.id}`}>View more</Link>
              </p>
            </div>
          );
        })}
    </>
  );
};

export default HomePage;
