class PostSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :title, :body, :created_at, :updated_at
end
