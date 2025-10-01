import PromptTable from "@/components/admin/prompts/PromptTable";
import {getPrompts} from "@/lib/services/admin/prompts/prompt.service";
import {Direction, Sort} from "@/types/type";
import PaginationControls from "@/components/common/PaginationControls";
import styles from './PromptsPage.module.css'

interface PromptsPageProps {
  searchParams: Promise<{
    page?: string;
    size?: string;
    sort?: string;
    direction?: string;
  }>;
}

export default async function PromptsPage({searchParams}: PromptsPageProps) {
  const params = await searchParams;
  const page = Number(params.page) || 1;
  const size = Number(params.size) || 20;
  const sort = params.sort as Sort || Sort.CREATED_AT;
  const direction = params.direction as Direction || Direction.DESC;

  const {prompts, totalPages} = await getPrompts({page, size, sort, direction});
  return (
      <div className={styles.promptsPageContainer}>
          <PromptTable prompts={prompts}/>
          <PaginationControls currentPage={page} totalPages={totalPages} basePath="/admin/prompts"/>
      </div>
  )
}
