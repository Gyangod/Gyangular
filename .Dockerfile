FROM node:latest as stage
LABEL Anindya Chakraborty <anindya100c@gmail.com>

# -----------------------------------------------------------------------------
# Environment variables
# -----------------------------------------------------------------------------
ENV GIT_EMAIL="anindya100c@gmail.com" \
  GIT_NAME="Anindya Chakraborty"

RUN git config --global user.email "${GIT_EMAIL}"
RUN git config --global user.name "${GIT_NAME}"
