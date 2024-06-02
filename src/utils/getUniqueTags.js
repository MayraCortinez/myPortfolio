
export async function getUniqueTags(projects) {
    return [...new Set(projects.flatMap(project => project.data.tags))];
  }
  
