FROM node:latest as stage
LABEL Anindya Chakraborty <anindya100c@gmail.com>

# -----------------------------------------------------------------------------
# Environment variables
# -----------------------------------------------------------------------------
ENV GIT_EMAIL="anindya100c@gmail.com" \
  GIT_NAME="Anindya Chakraborty"

RUN git config --global user.email "${GIT_EMAIL}"
RUN git config --global user.name "${GIT_NAME}"

RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install --legacy-peer-deps
COPY . /app
RUN npm run build --prod

# Stage 2

FROM nginx:1.17.1-alpine
COPY --from=stage /app/dist /usr/share/nginx/html