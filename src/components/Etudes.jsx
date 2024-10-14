import { Formations } from "../constantes/data";

const Etudes = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">Etudes</h2>
      <div>
        {Formations.map((formation, index) => (
          <div key={index} className="mb-10 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-neutral-400">{formation.dates}</p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">
                {formation.title} -
                <span className="text-sm text-purple-100">
                  {formation.school}
                </span>
              </h6>
              <p className="mb-4 text-neutral-400">{formation.description}</p>
              {formation.competences.map((competence, index) => (
                <span
                  key={index}
                  className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                >
                  {competence}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Etudes;
