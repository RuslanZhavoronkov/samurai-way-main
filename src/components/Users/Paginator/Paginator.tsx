import { useState } from "react";
import { PaginationType, UsersServerType } from "../../../redux/usersReducer";
import s from "./Paginator.module.css";

type PaginationPropsType = {
  users: UsersServerType;
  pagination: PaginationType;
  onPageChanged: (pageNumber: number) => void;
  portionSize?: number; //размер порции
};

export const Paginator: React.FC<PaginationPropsType> = ({
  users,
  pagination,
  onPageChanged,
  portionSize = 10,
}) => {
  let pageArray = [];
  let pagesCount = Math.ceil(users.totalCount / pagination.pageSize);
  for (let i = 1; i <= pagesCount; i++) {
    pageArray.push(i);
  }
  let portionCount = Math.ceil(pagesCount / portionSize); //кол-во порций (кол-во страниц/размер порции(кол-во страниц в порции) = кол-во порции которое получится)
  let [portionNumber, setPortionNumber] = useState(1); //локальный state номера порции
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1; //левая граница порции
  let rightPortionPageNumber = portionNumber * portionSize; //правая граница порции
  const decreasePortionNumber = () => {
    setPortionNumber(portionNumber - 1);
  };
  const increasePortionNumber = () => {
    setPortionNumber(portionNumber + 1)
  };

  return (
    <div className={s.paginator}>
      {portionNumber > 1 && (
        <button onClick={decreasePortionNumber}>PREV</button>
      )}

      {pageArray
        .filter(
          (pageNumber) =>
            pageNumber >= leftPortionPageNumber &&
            pageNumber <= rightPortionPageNumber
        )
        .map((el) => {
          const boldSpan = pagination.currentPage === el ? `${s.selectedPage} ${s.pageNumber}` : s.pageNumber;

          const onClickSpanHandler = () => {
            onPageChanged(el);
          };

          return (
            <span className={boldSpan} onClick={onClickSpanHandler}>
              {el}
            </span>
          );
        })}
      {portionCount > portionNumber && (
        <button onClick={increasePortionNumber}>NEXT</button>
      )}
    </div>
  );
};

//__________________________________________________________________________________________________________________________

// return (
//   <div className={s.paginator}>
//     {portionNumber > 1 && <button onClick={increasePortionNumber} />}

//     {pageArray.map((el) => {
//       const boldSpan = pagination.currentPage === el ? s.selectedPage : "";

//       const onClickSpanHandler = () => {
//         onPageChanged(el);
//       };

//       return (
//         <span className={boldSpan} onClick={onClickSpanHandler}>
//           {el}
//         </span>
//       );
//     })}
//   </div>
// );
