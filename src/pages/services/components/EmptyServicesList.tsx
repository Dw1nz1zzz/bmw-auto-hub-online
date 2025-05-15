
import React from "react";

const EmptyServicesList: React.FC = () => {
  return (
    <div className="text-center py-12">
      <p className="text-gray-500 text-lg">
        Услуги не найдены. Пожалуйста, попробуйте другой запрос.
      </p>
    </div>
  );
};

export default EmptyServicesList;
