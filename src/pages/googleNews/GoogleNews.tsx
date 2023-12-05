import CardContent from "../../components/card-content/CardContent";
import Subtitle from "../../components/core/Subtitle/Subtitle";
import Paragraph from "../../components/core/paragraph/Paragraph";
import { useNews } from "../../shared/hooks/useNews";
import "./GoogleNews.scss";

export default function GoogleNews() {
  const { articles, isLoading } = useNews();
  console.log(articles);

  return (
    <>
      <div className="gnews">
        <h1 className="gnews__title">Google News (Brazil)</h1>
        <Paragraph>
          Cobertura jornalística abrangente e atualizada, agregada de fontes do
          mundo inteiro pelo Google Notícias.
        </Paragraph>
        {isLoading ? (
          <Subtitle>Buscando artigos..</Subtitle>
        ) : articles.length > 0 ? (
          <div className="gnews__items">
            {articles.map((article) => {
              return (
                <CardContent
                  ariaLabel={"Ler mais sobre: " + article.title!}
                  heading={article.author}
                  subtitle={new Date(article.publishedAt).toLocaleDateString()}
                  paragraph={article.title!}
                  buttonLabel="Ler mais"
                ></CardContent>
              );
            })}
          </div>
        ) : (
          <Subtitle>Nenhum artigo foi encontrado.</Subtitle>
        )}
      </div>
    </>
  );
}
