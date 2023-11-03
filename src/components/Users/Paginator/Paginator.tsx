import { PaginationType, UsersServerType } from "../../../redux/usersReducer";
import s from "./Paginator.module.css";

type PaginationPropsType = {
  users: UsersServerType;
  pagination: PaginationType;
  onPageChanged: (pageNumber: number) => void;
};

export const Paginator: React.FC<PaginationPropsType> = (
  {
    users,
    pagination,
    onPageChanged
  }
) => {
  let pageArray = [];
  let pagesCount = Math.ceil(
    users.totalCount / pagination.pageSize
  );
  for (let i = 1; i <= pagesCount; i++) {
    pageArray.push(i);
  }
  return (
    <div>
      {pageArray.map((el) => {
        const boldSpan =
          pagination.currentPage === el ? s.selectedPage : "";

        const onClickSpanHandler = () => {
          onPageChanged(el);
        };

        return (
          <span className={boldSpan} onClick={onClickSpanHandler}>
            {el}
          </span>
        );
      })}
    </div>
  );
};
