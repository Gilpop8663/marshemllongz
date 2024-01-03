interface GetImageUrl {
  imageUrl: string;
  imageFile: File;
}
/**
 * 이미지 파일이 있다면 이미지 파일의 Url을 반환한다.
 * 이미지 파일이 없고 이미지 Url이 존재한다면 존재하던 이미지 URL을 반환한다.
 */
export const getImageUrl = async ({ imageFile, imageUrl }: GetImageUrl) => {
  if (imageFile) {
    return await cfImageUpload(imageFile);
  }

  return imageUrl;
};

interface CfUploadEndPointApiResult {
  result: {
    id: string;
    uploadURL: string;
  };
  success: boolean;
  errors: {
    code: number;
    message: string;
  }[];
  messages: {
    code: number;
    message: string;
  }[];
}

interface CfUploadApiResult {
  result: {
    id: string;
    metadata: {
      key: string;
    };
    uploaded: string;
    requireSignedURLs: boolean;
    variants: string[];
    draft: boolean;
  };
  success: boolean;
  errors: {
    code: number;
    message: string;
  }[];
  messages: {
    code: number;
    message: string;
  }[];
}

/**
 * cloudflare
 * 클라우드 플레어에 이미지를 업로드하는 함수
 */
export const cfImageUpload = async (file: File) => {
  const {
    result: { uploadURL },
  }: CfUploadEndPointApiResult = await (
    await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${process.env.NEXT_PUBLIC_ENV_CLOUDFLARE_ACCOUNT_ID}/images/v2/direct_upload`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_ENV_CLOUDFLARE_IMAGE_API_KEY}`,
        },
      }
    )
  ).json();

  const form = new FormData();
  form.append('file', file);

  const {
    result: { id },
  }: CfUploadApiResult = await (
    await fetch(uploadURL, {
      method: 'POST',
      body: form,
    })
  ).json();

  return id;
};
