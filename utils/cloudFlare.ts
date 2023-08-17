export interface CFImageResult {
  result: {
    id: string;
    uploadURL: string;
  };
  result_info: null;
  success: boolean;
  errors: [];
  messages: [];
}

export function makeImageURL(id: string) {
  return `https://imagedelivery.net/mPhC7i6OFJEhfh-kdGX8yQ/${id}/public`;
}

export const cfImageUpload = async (file: File) => {
  const { uploadURL } = await (await fetch('/api/files')).json();

  const form = new FormData();
  form.append('file', file);

  const {
    result: { id },
  }: CFImageResult = await (
    await fetch(uploadURL, {
      method: 'POST',
      body: form,
    })
  ).json();

  return id;
};
