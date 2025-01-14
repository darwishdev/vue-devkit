import { createClient } from "@connectrpc/connect";
import { createConnectTransport } from "@connectrpc/connect-web";
import { DevkitService } from "@buf/ahmeddarwish_devkit-api.bufbuild_es/devkit/v1/devkit_service_pb"
const transport = createConnectTransport({
  baseUrl: import.meta.env.VITE_API_URL,
  useHttpGet: true,
});

export const apiClient = createClient(DevkitService, transport);

